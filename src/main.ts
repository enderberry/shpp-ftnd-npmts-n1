import dom from './scripts/dom';

let selTime = 0;

dom.btn.su_decr.onclick = () => selTime && dom.fn.text.set_su_time(--selTime);
dom.btn.su_incr.onclick = () => dom.fn.text.set_su_time(++selTime);
dom.btn.su_start.onclick = function () {
    let time = selTime * 60;

    dom.fn.gen.vis_su(false);
    dom.fn.gen.vis_rn(true);

    dom.fn.text.set_rn_time(time);

    const itv = setInterval(function () {
        if (time-- === 0) {
            dom.fn.gen.vis_su(true);
            dom.fn.gen.vis_rn(false);

            clearInterval(itv);
        }
        dom.fn.text.set_rn_time(time);
    }, 1000);
};
