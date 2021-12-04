from django.db import models


class Attraction(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    region = models.CharField(max_length=50)
    type = models.CharField(max_length=30)
    open = models.CharField(max_length=50)
    admission_fee = models.BooleanField(default=False)
    entrance_fee = models.DecimalField(max_digits=6, decimal_places=1)
    distance_from_yerevan = models.FloatField()

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title

    # def get_absolute_url(self):
    #     return reverse("places:details", args=[str(self.id)])

    def get_default_image(self):
        images_list = self.images.filter(default=True)

        if len(images_list):
            return images_list[0].image.url

    def get_images(self):
        images_list = self.images.filter(default=False)
        return images_list.all()

    def get_images_count(self):
        return self.get_images().count()


class Amenity(models.Model):
    title = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "Amenities"

    def __str__(self):
        return self.title

class Restaurant(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    region = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    open = models.CharField(max_length=50)
    image = models.ImageField(upload_to="images/restaurants/")
    amenities = models.ManyToManyField(Amenity)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title

    # def get_absolute_url(self):
    #     return reverse("places:details", args=[str(self.id)])

class Gallery(models.Model):
    attraction = models.ForeignKey(
        Attraction, on_delete=models.CASCADE, related_name="images"
    )
    image = models.ImageField(upload_to="images/")
    default = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Gallery"

    def __str__(self):
        return self.attraction.title
