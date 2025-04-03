from django.http import JsonResponse
from django.shortcuts import render
import json
from .models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt


def companies_list(request):
    companies = Company.objects.all()
    json = {'companies': [company.name for company in companies]}
    return JsonResponse(json, json_dumps_params={'ensure_ascii': False})

@csrf_exempt
def create_company(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            company = Company.objects.create(
                name=data["name"],
                description=data["description"],
                city=data["city"],
                address=data["address"]
            )
            return JsonResponse({"id": company.id, "name": company.name}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Invalid request"}, status=405)


def create_vacancies(request):
    if request.metrhod == "POST":
        data = json.loads(request.body)
        vacancy = Vacancy.objects.create(
            name=data["name"],
            vacancy=
        )

def company_detail(request, id):
    category = Company.objects.get(id=id)
    json = {'companies': {
        'name': category.name
    }}
    return JsonResponse(json)


def company_vacancies(request, id):
    company = Company.objects.get(id=id)
    vacancies = company.vacancy_set.all()
    vacancies_json = [{'id': vacancy.id, 'name': vacancy.name,
                       'salary': vacancy.salary} for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'ensure_ascii': False})


def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    json = [{'vacancies': vacancy.name, 'company': vacancy.company.name}
            for vacancy in vacancies]
    return JsonResponse(json, safe=False, json_dumps_params={'ensure_ascii': False})


def vacancy_detail(request, id):
    vacancy = Vacancy.objects.get(id=id)
    json = {'vacancy': {
        'name': vacancy.name,
        'salary': vacancy.salary,
        'company': vacancy.company.name
    }}
    return JsonResponse(json, json_dumps_params={'ensure_ascii': False})


def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [{'name': vacancy.name, 'salary': vacancy.salary,
                       'company': vacancy.company.name} for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'ensure_ascii': False})