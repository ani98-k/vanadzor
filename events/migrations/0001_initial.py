# Generated by Django 3.2.7 on 2021-11-21 20:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('image', models.ImageField(upload_to='images/')),
                ('address', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=255)),
                ('date_time', models.CharField(max_length=100)),
                ('participation_fee', models.DecimalField(decimal_places=1, max_digits=6)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=12)),
            ],
            options={
                'ordering': ['title'],
            },
        ),
    ]
