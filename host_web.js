
window.gintoSettings = {
    language: 'de',
    onLanguageChanged: (value) => {
        console.log(`onLanguageChanged: ${value}`);
    }
};

document.querySelector('.language-select').value = window.gintoSettings.language;

function onLanguageChanged(value) {
    console.log(`Language changed to ${value}`);
    window.gintoSettings.language = value;
    window.gintoSettings.onLanguageChanged.call(null, value);
}

(function () {
    let oldPushState = history.pushState;
    history.pushState = function pushState() {
        let ret = oldPushState.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    let oldReplaceState = history.replaceState;
    history.replaceState = function replaceState() {
        let ret = oldReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'));
    });
})();
