package com.locketz;

import com.facebook.react.ReactActivity;
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "locketz";
    }

    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == MainApplication.PAY_PAL_REQUEST_ID) { // <--
            ((MainApplication) getApplication()).payPalPackage.handleActivityResult(requestCode, resultCode, data); // <--
        } else {
            otherModulesHandlers(requestCode, resultCode, data);
        }
    }
}
