package com.example.banktraining

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val textView = TextView(this)
        textView.text = "Bank xodimlarining malakasini oshirishda zamonaviy yondashuvlar"
        setContentView(textView)
    }
}
