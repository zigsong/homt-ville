# Generated by Django 3.0.1 on 2020-06-02 07:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Branch',
            fields=[
                ('name', models.CharField(default='', max_length=100, primary_key=True, serialize=False)),
                ('translation', models.CharField(default='', max_length=100)),
                ('description', models.CharField(default='', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('videoId', models.CharField(default='', max_length=100)),
                ('level', models.IntegerField(null=True)),
                ('runtime', models.IntegerField(null=True)),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videos', to='yoga_page.Branch')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='yoga_page')),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='yoga_page.Branch')),
            ],
        ),
    ]
