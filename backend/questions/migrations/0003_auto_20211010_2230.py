# Generated by Django 3.2 on 2021-10-10 22:30

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('questions', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='liked_user',
            field=models.ManyToManyField(blank=True, related_name='liked_questions', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='questioncomment',
            name='liked_user',
            field=models.ManyToManyField(blank=True, related_name='liked_question_comments', to=settings.AUTH_USER_MODEL),
        ),
    ]