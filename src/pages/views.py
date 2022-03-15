from django.shortcuts import render


def about_me(request):
    return render(request, 'about-me.html')


def skills(request):
    return render(request, 'skills.html')


def experience(request):
    return render(request, 'experience.html')


def portfolio(request):
    return render(request, 'portfolio.html')


def contacts(request):
    return render(request, 'contacts.html')
