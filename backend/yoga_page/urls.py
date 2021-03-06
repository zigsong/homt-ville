from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# app_name = 'yoga_page'b

urlpatterns = [
    path('', views.BranchList.as_view()),
    path('<slug:name>/', views.BranchDetail.as_view()), # request 함수에 name field를 넣어야 함
    path('<slug:name>/images/', views.ImageView.as_view()),
    path('<slug:name>/videos/', views.VideoList.as_view()),
    # path('<slug:name>/videos/get_youtube_data/', views.get_youtube_data),
] 
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
