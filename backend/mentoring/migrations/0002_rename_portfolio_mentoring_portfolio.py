# Generated by Django 3.2 on 2021-09-25 06:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mentoring', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mentoring',
            old_name='Portfolio',
            new_name='portfolio',
        ),
    ]
