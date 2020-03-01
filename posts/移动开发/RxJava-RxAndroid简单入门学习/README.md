---
title: RxJava & RxAndroid 简单入门学习
date: 2017-03-12 23:51:51
tags: [Android,RxJava]
categories: [移动开发]
---

由于时间问题，只是先入个门，用一用，后面还会做进一步的学习。

### 引入Gradle

```groovy
compile 'io.reactivex.rxjava2:rxjava:2.0.6'
compile 'io.reactivex.rxjava2:rxandroid:2.0.1'
```

<!-- more -->

### 代码

```java
package com.zyao89.demorxjava;

import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ScrollView;
import android.widget.TextView;

import io.reactivex.Observable;
import io.reactivex.ObservableEmitter;
import io.reactivex.ObservableOnSubscribe;
import io.reactivex.Observer;
import io.reactivex.disposables.Disposable;

public class MainActivity extends AppCompatActivity
{
    private Handler mHandler = new Handler();
    private Observable<String> mObservable;
    private Observer<String>   mObserver;
    private TextView           mLogCat;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mLogCat = (TextView) findViewById(R.id.logcat);
    }

    /**
     * 创建发送器对象
     * @param view
     */
    public void createObservable(View view)
    {
        printLogCat("createObservable... ");
        mObservable = Observable.create(new ObservableOnSubscribe<String>()
        {
            @Override
            public void subscribe(ObservableEmitter<String> e) throws Exception
            {
                printLogCat("subscribe... e.onNext()...");
                e.onNext("Zyao89");
                e.onComplete();
                printLogCat("subscribe... e.onComplete()...");
            }
        });
    }

    /**
     * 创建接受者对象
     * @param view
     */
    public void createObserver(View view)
    {
        printLogCat("createObserver... ");
        mObserver = new Observer<String>()
        {
            @Override
            public void onSubscribe(Disposable d)
            {
                printLogCat("onSubscribe... ");
            }

            @Override
            public void onNext(String s)
            {
                printLogCat("onNext... s: " + s);
            }

            @Override
            public void onError(Throwable e)
            {
                printLogCat("onError... " + e.getMessage());
            }

            @Override
            public void onComplete()
            {
                printLogCat("onComplete...");
            }
        };
    }

    public void subscribe(View view)
    {
        if (mObservable != null && mObserver != null)
        {
            printLogCat("subscribe...  mObservable.subscribe(mObserver)");
            mObservable.subscribe(mObserver);
        }
    }

    private void printLogCat(Object... texts)
    {
        for (Object text : texts)
        {
            mLogCat.append(text + "\n");
        }
        mHandler.post(new Runnable()
        {
            @Override
            public void run()
            {
                ScrollView scrollView = (ScrollView) mLogCat.getParent();
                scrollView.fullScroll(ScrollView.FOCUS_DOWN);//滚动到底部
            }
        });
    }

    public void clear(View view)
    {
        mLogCat.setText("");
    }
}
```

### Github源码

[zyao89/DemoRxJava](https://github.com/zyao89/DemoRxJava)

---

`作者：Zyao89；转载请保留此行，谢谢；`
