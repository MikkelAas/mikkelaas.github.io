import {
	S as i,
	i as l,
	s as c,
	e as d,
	t as h,
	c as m,
	a as p,
	h as u,
	d as r,
	g as _,
	J as f,
	n
} from '../chunks/index-bf1ed64f.js';
function x(o) {
	let e, s;
	return {
		c() {
			(e = d('h1')), (s = h('Mikkel Aas'));
		},
		l(t) {
			e = m(t, 'H1', {});
			var a = p(e);
			(s = u(a, 'Mikkel Aas')), a.forEach(r);
		},
		m(t, a) {
			_(t, e, a), f(e, s);
		},
		p: n,
		i: n,
		o: n,
		d(t) {
			t && r(e);
		}
	};
}
const g = !0;
class v extends i {
	constructor(e) {
		super(), l(this, e, null, x, c, {});
	}
}
export { v as default, g as prerender };
