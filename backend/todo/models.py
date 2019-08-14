from django.db import models
from django.utils import timezone

class Task(models.Model):
    TODO ="TODO"
    DONE = "DONE"
    REMOVE = "REMOVE"
    STATE_OF_TASK = ((TODO,'todo'),(DONE,'done'),(REMOVE,'remove'))
    title = models.CharField(max_length= 70, null=False)
    description = models.TextField()
    tags= models.CharField(max_length=20, null=True)
    date_created = models.DateTimeField(auto_now_add = True)
    to_due_date = models.DateTimeField(null=True)
    priority = models.IntegerField(default=1)
    state=models.CharField(max_length = 6, choices =STATE_OF_TASK,default= TODO )
    def _str_(self):
        return self.title
