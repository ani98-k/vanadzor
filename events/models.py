from django.db import models
from django.urls import reverse


class Event(models.Model):
    title = models.CharField(max_length=30)
    image = models.ImageField(upload_to="images/")
    address = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    date_time = models.CharField(max_length=100)
    participation_fee = models.DecimalField(max_digits=6, decimal_places=1)
    email = models.EmailField()
    phone = models.CharField(max_length=12)

    class Meta:
        ordering = ['title']

    # def get_absolute_url(self):
    #     return reverse("events:details", args=[str(self.id)])
