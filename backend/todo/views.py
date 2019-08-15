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
    return JsonResponse({"all":data} , status=201)


@require_http_methods(['POST'])
def create_new_task(request):
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

@require_http_methods(['DELETE'])
def delete_task(request):
    print ("inside delete")
    # try:
    data = json.loads(request.body)
    print("data= "+str(data))
    Task.objects.get(id=data["id"]).delete()
    new_data = list(Task.objects.values())
    return JsonResponse({"all":new_data}, status=200)
    # except Exception as ex:
        # return JsonResponse({"error":str(ex)}, status=500)