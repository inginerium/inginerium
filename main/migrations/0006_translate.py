# Generated by Django 3.1.7 on 2021-02-27 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_auto_20210227_1201'),
    ]

    operations = [
        migrations.CreateModel(
            name='Translate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('home_am', models.CharField(max_length=255, verbose_name='Главная (AM)')),
                ('home_ru', models.CharField(max_length=255, verbose_name='Главная (RU)')),
                ('home_en', models.CharField(max_length=255, verbose_name='Главная (EN)')),
                ('about_am', models.CharField(max_length=255, verbose_name='О нас (AM)')),
                ('about_ru', models.CharField(max_length=255, verbose_name='О нас (RU)')),
                ('about_en', models.CharField(max_length=255, verbose_name='О нас (EN)')),
                ('service_am', models.CharField(max_length=255, verbose_name='Сервисы (AM)')),
                ('service_ru', models.CharField(max_length=255, verbose_name='Сервисы (RU)')),
                ('service_en', models.CharField(max_length=255, verbose_name='Сервисы (EN)')),
                ('work_am', models.CharField(max_length=255, verbose_name='Работы (AM)')),
                ('work_ru', models.CharField(max_length=255, verbose_name='Работы (RU)')),
                ('work_en', models.CharField(max_length=255, verbose_name='Работы (EN)')),
                ('contact_am', models.CharField(max_length=255, verbose_name='Обратная связь (AM)')),
                ('contact_ru', models.CharField(max_length=255, verbose_name='Обратная связь (RU)')),
                ('contact_en', models.CharField(max_length=255, verbose_name='Обратная связь (EN)')),
            ],
        ),
    ]