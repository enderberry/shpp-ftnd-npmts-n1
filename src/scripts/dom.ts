import {getid, time_format} from './funcs';

const dom = {
    gen: {
        su: getid('block-timer-setup'),
        rn: getid('block-timer-running'),
    },
    text: {
        su_time: getid('text-adj-time'),
        rn_time: getid('text-timer-time'),
    },
    btn: {
        su_decr: getid('btn-adj-decr'),
        su_incr: getid('btn-adj-incr'),
        su_start: getid('btn-start'),
    },
    csn: {
        mhidden: 'timer__main--hidden',
    },
    fn: {
        gen: {
            vis_su: (vis: boolean) => dom.gen.su.classList.toggle(dom.csn.mhidden, !vis),
            vis_rn: (vis: boolean) => dom.gen.rn.classList.toggle(dom.csn.mhidden, !vis),
        },
        text: {
            set_su_time: (minutes: number) => (dom.text.su_time.innerHTML = '' + minutes),
            set_rn_time: (time: number) => (dom.text.rn_time.innerHTML = time_format(time)),
        },
    },
};

export default dom;
export {getid, time_format};
