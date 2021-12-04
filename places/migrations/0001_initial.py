# Generated by Django 3.2.7 on 2021-11-21 20:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Amenity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Attraction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=255)),
                ('region', models.CharField(max_length=50)),
                ('type', models.CharField(max_length=30)),
                ('open', models.CharField(max_length=50)),
                ('admission_fee', models.BooleanField(default=False)),
                ('entrance_fee', models.DecimalField(decimal_places=1, max_digits=6)),
                ('distance_from_yerevan', models.FloatField()),
            ],
            options={
                'ordering': ['title'],
            },
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=255)),
                ('region', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=100)),
                ('open', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='images/restaurants/')),
                ('amenities', models.ManyToManyField(to='places.Amenity')),
            ],
            options={
                'ordering': ['title'],
            },
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images/')),
                ('default', models.BooleanField(default=False)),
                ('attraction', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='places.attraction')),
            ],
            options={
                'verbose_name_plural': 'Gallery',
            },
        ),
    ]