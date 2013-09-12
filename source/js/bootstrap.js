$('#footer')
	.remove()
	.removeAttr('id')
	.find('.back-to-top')
		.removeAttr('href')
	.end()
	.addClass('footer')
	.appendTo('.page, .project');

var blog = new Page({id: '/blog'});
var home = new Page({id: '/'});
var about = new Page({id: '/about-me'});
var contact = new Page({id: '/contact-me'});

var pSect = new Sect({id: 0, activePage: blog.id});
var hSect = new Sect({id: 1, activePage: home.id});
var cSect = new Sect({id: 2, activePage: contact.id});
pSect.pages.add(blog);
hSect.pages.add([home, about]);
cSect.pages.add(contact);

var app = new App({activeSect: hSect.id})
app.sects.add([pSect, hSect, cSect]);

var appRouter = new AppRouter();

var appView = new AppView();

var hSectView = new HSectView({model: hSect});
var homeView = new HomeView({model: home, 
	container: $('#header'), el: $('#logo, #nav .about')});
var aboutView = new AboutView({model: about, el: $('#about')});

var pSectView = new PSectView({model: pSect});
var $blog = $('#blog');
var blogView = new BlogView({model: blog,
	container: $blog, el: $('>header, >footer', $blog)});

var projNavView = new ProjNavView({el: $('>header', $blog)});

$('.project').each(function(i, proj) {
    var id = $('>header input[name=path]', proj).val();
	
	var project = new Page({id: id, index: i});
	pSect.pages.add(project);

	new ProjectView({
		model: project,
		container: $blog,
		el: proj
	});
});


var cSectView = new CSectView({model: cSect});
var contactView = new ContactView({model: contact, el: $('#contact')});

Backbone.history.start();
app.inited = true;