package com.example.starstudy

import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.provider.MediaStore
import android.view.WindowManager
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.core.content.FileProvider
import java.io.File

class MainActivity : Activity() {

    private lateinit var webView: WebView
    private var fileChooserCallback: ValueCallback<Array<Uri>>? = null
    private var cameraUri: Uri? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        webView = WebView(this)
        setContentView(webView)

        // 学习计时时保持屏幕常亮，避免息屏自动暂停
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            mediaPlaybackRequiresUserGesture = false
            allowContentAccess = true
            allowFileAccess = true
            useWideViewPort = true
            loadWithOverviewMode = true
            setSupportZoom(false)
        }

        webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                val url = request.url.toString()
                return if (url.startsWith("https://appassets.androidplatform.net/")) {
                    false
                } else {
                    try {
                        startActivity(Intent(Intent.ACTION_VIEW, request.url))
                    } catch (_: Exception) {
                    }
                    true
                }
            }
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onShowFileChooser(
                webView: WebView,
                filePathCallback: ValueCallback<Array<Uri>>,
                fileChooserParams: FileChooserParams
            ): Boolean {
                fileChooserCallback?.onReceiveValue(null)
                fileChooserCallback = filePathCallback

                val cameraIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
                val photoFile: File? = try {
                    val dir = File(cacheDir, "camera").apply { mkdirs() }
                    File.createTempFile("photo", ".jpg", dir)
                } catch (_: Exception) {
                    null
                }

                val chooser: Intent
                if (photoFile != null && cameraIntent.resolveActivity(packageManager) != null) {
                    cameraUri = FileProvider.getUriForFile(
                        this@MainActivity,
                        "$packageName.fileprovider",
                        photoFile
                    )
                    cameraIntent.putExtra(MediaStore.EXTRA_OUTPUT, cameraUri)
                    val galleryIntent = Intent(Intent.ACTION_GET_CONTENT).apply { type = "image/*" }
                    chooser = Intent.createChooser(cameraIntent, "选择照片")
                    chooser.putExtra(Intent.EXTRA_INITIAL_INTENTS, arrayOf(galleryIntent))
                } else {
                    chooser = Intent.createChooser(
                        Intent(Intent.ACTION_GET_CONTENT).apply { type = "image/*" },
                        "选择照片"
                    )
                }
                startActivityForResult(chooser, REQUEST_CHOOSER)
                return true
            }
        }

        // 直接把打包进 App 的网页内容加载进 WebView，
        // 不经过任何网址解析，彻底避免 ERR_NAME_NOT_RESOLVED。
        val html = assets.open("www/index.html").bufferedReader().use { it.readText() }
        webView.loadDataWithBaseURL(
            "https://appassets.androidplatform.net/",
            html,
            "text/html",
            "utf-8",
            null
        )
    }

    @Suppress("DEPRECATION")
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == REQUEST_CHOOSER) {
            var results: Array<Uri>? = null
            if (resultCode == RESULT_OK) {
                results = if (data?.data != null) {
                    arrayOf(data.data!!)
                } else {
                    cameraUri?.let { arrayOf(it) }
                }
            }
            fileChooserCallback?.onReceiveValue(results)
            fileChooserCallback = null
            cameraUri = null
        } else {
            super.onActivityResult(requestCode, resultCode, data)
        }
    }

    @Suppress("DEPRECATION")
    override fun onBackPressed() {
        if (webView.canGoBack()) webView.goBack() else super.onBackPressed()
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        webView.saveState(outState)
    }

    override fun onRestoreInstanceState(savedInstanceState: Bundle) {
        super.onRestoreInstanceState(savedInstanceState)
        webView.restoreState(savedInstanceState)
    }

    companion object {
        private const val REQUEST_CHOOSER = 101
    }
}
