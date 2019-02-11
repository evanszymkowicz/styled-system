(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{135:function(e,n,t){"use strict";t.r(n);var a=t(4),o=t.n(a),s=t(0),m=t.n(s),p=t(1);n.default=function(e){var n=e.components;o()(e,["components"]);return m.a.createElement(p.MDXTag,{name:"wrapper",components:n},m.a.createElement(p.MDXTag,{name:"h1",components:n,props:{id:"custom-style-props"}},"Custom Style Props"),m.a.createElement(p.MDXTag,{name:"p",components:n},"To extend styled-system for other CSS properties that aren't included in the library, use the ",m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"api.md#customize"}},"custom utilities")," to create your own style functions."),m.a.createElement(p.MDXTag,{name:"p",components:n},"All styled-system functions rely on these low-level utilities."),m.a.createElement(p.MDXTag,{name:"ul",components:n},m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"style")," creates a non-responsive style function"),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"variant")," creates a complex style function based on style objects defined in a theme")),m.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"example-usage"}},"Example Usage"),m.a.createElement(p.MDXTag,{name:"pre",components:n},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import styled from 'styled-components'\nimport { style } from 'styled-system'\n\nconst textDecoration = style({\n  prop: 'textDecoration',\n  cssProperty: 'textDecoration'\n})\n\nconst Link = styled.a`\n  ${textDecoration}\n`\n\nLink.propTypes = {\n  ...textDecoration.propTypes\n}\n\nexport default Link\n")),m.a.createElement(p.MDXTag,{name:"p",components:n},"Read more in the ",m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"api.md#customize"}},"custom utilities docs"),"."))}}}]);