from django.contrib import admin
from django.urls import path, include
from django.conf import settings # 추가
from django.conf.urls.static import static # 추가

urlpatterns = [
    path('admin/', admin.site.urls),
    path('yoga/', include('yoga_page.urls')),
]

# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
