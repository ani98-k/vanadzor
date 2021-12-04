from django.http import HttpResponse
from django.template import loader
from .models import Attraction



def index(request):
    attraction = Attraction.objects.all()

    template = loader.get_template("index.html")
    context = {
        'attraction': attraction
    }

    return HttpResponse(template.render(context, request))
