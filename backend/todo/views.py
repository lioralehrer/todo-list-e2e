from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import Task
from django.http import JsonResponse
from django.forms.models import model_to_dict
import json



# get todo list, create new task 


@require_http_methods(['GET'])
def get_tasks(request):
    data = list(Task.objects.values())
    return JsonResponse({"all":data})


@require_http_methods(['POST'])
def create_new_task(request):
    print("-----------")
    print (request.body)
    print("---------")
    try:
        data = json.loads(request.body)
        new_task = Task(
            title=data["task"],
            description=data["description"],
            # tags=data["tags"],
            # to_due_date =data["to_due_date"]),
            priority=data["priority"],
            # state=data["state"],
        )
        new_task.save()
    
        return JsonResponse(model_to_dict(new_task), status=201)

    except Exception as ex:
        return JsonResponse({"error",ex}, status=500)
