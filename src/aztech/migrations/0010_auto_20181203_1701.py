# Generated by Django 2.1.3 on 2018-12-03 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aztech', '0009_auto_20181201_2317'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='status',
            field=models.CharField(choices=[('ongoing', 'ongoing'), ('completed', 'completed'), ('future', 'future')], default=('ongoing', 'ongoing'), max_length=25),
        ),
    ]
