function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1c5Ur37THzGwOhWQ78OjPNYaVqgjKCiuMYJj0CEfkYaU/edit?usp=sharing',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
