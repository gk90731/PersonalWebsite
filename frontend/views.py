from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail, BadHeaderError

# Create your views here.
def index(request):
    return render(request,'index.html')

def leave_message(request):
    if request.method == "POST":
        subject = str(request.data["name"])+"by"+str(request.data["email"])
        body    = str(request.data["message"])
        send_mail(subject, body, 'projektclubbit@gmail.com', ['gk90731@gmail.com'])
        return HttpResponse(status=202)