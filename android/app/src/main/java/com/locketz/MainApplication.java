package com.locketz;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import br.com.vizir.rn.paypal.PayPalPackage; // <--

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private static final int PAY_PAL_REQUEST_ID = 9; // <-- Can be any unique number
    private PayPalPackage payPalPackage; // <--

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            payPalPackage = new PayPalPackage(PAY_PAL_REQUEST_ID);  // <--
            return Arrays.<ReactPackage>asList(
                    payPalPackage,  // <--
                    new MainReactPackage(),
                    new RNFetchBlobPackage()
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
