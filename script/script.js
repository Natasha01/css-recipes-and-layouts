function setSocialCount(social_class, count) {
    let a = document.querySelectorAll(social_class);
    for (let i = 0; i < a.length; i++) {
        let span = document.createElement('span');
        span.className = 'count';
        span.innerHTML = String(count);
        a[i].appendChild(span);
    }
}

function socialItems() {
    let count_facebook = 16,
        count_google = 7,
        count_twitter = 15,
        count_vk = 16,
        count_yandex = 1;

    setSocialCount('.facebook', count_facebook);
    setSocialCount('.google', count_google);
    setSocialCount('.twitter', count_twitter);
    setSocialCount('.vk', count_vk);
    setSocialCount('.yandex', count_yandex);
}

document.addEventListener("DOMContentLoaded", socialItems);
