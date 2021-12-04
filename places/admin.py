from django.contrib import admin

from .models import Attraction, Restaurant, Gallery, Amenity


class GalleryInline(admin.TabularInline):
    model = Gallery
    extra = 0

@admin.register(Attraction)
class AttractionAdmin(admin.ModelAdmin):
    list_display = ('title', 'open', 'region')
    inlines = [GalleryInline]


@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('title', 'address', 'open')

@admin.register(Amenity)
class AmenityAdmin(admin.ModelAdmin):
    list_display = ('title',)