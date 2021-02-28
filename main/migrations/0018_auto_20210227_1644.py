# Generated by Django 3.1.7 on 2021-02-27 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0017_auto_20210227_1644'),
    ]

    operations = [
        migrations.AddField(
            model_name='translate',
            name='sales_manager_name_en',
            field=models.CharField(max_length=255, null=True, verbose_name='Имя менеджера продаж (EN)'),
        ),
        migrations.AlterField(
            model_name='translate',
            name='sales_manager_name_ru',
            field=models.CharField(max_length=255, null=True, verbose_name='Имя менеджера продаж (RU)'),
        ),
    ]