(this["webpackJsonpmovie_app_2021-4"]=this["webpackJsonpmovie_app_2021-4"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},60:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(29),r=n.n(c),i=(n(38),n(8)),o=n(2),l=(n(39),n(1));var j=function(e){return console.log(e),Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'}),Object(l.jsx)("span",{children:"- George Orwell, 1984"})]})},u=n(19),m=n.n(u),d=n(30),v=n(13),b=n(14),h=n(16),p=n(15),O=n(31),x=n.n(O);n(60);var f=function(e){var t=e.year,n=e.title,a=e.summary,s=e.poster,c=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(i.b,{to:{pathname:"/movie-detail",state:{year:t,title:n,summary:a,poster:s,genres:c}},children:[Object(l.jsx)("img",{src:s,alt:n,title:n}),Object(l.jsxs)("div",{className:"movie-data",children:[Object(l.jsx)("h3",{className:"movie-title",children:n}),Object(l.jsx)("h5",{className:"movie-year",children:t}),Object(l.jsxs)("p",{className:"movie-summary",children:[a.slice(0,180),"..."]}),Object(l.jsx)("ul",{className:"movie-genres",children:c.map((function(e,t){}))})]})]})})},y=(n(69),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsxs)("section",{className:"container",children:[" ",t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader-class",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return Object(l.jsx)(f,{year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})]})}}]),n}(s.a.Component)),g=y;n(70);var N=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(i.b,{to:"/",children:"Home"}),Object(l.jsx)(i.b,{to:"/about",children:"About"})]})},w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component),_=w;var k=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(N,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/movie-detail",component:_})]})};r.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.9792b176.chunk.js.map