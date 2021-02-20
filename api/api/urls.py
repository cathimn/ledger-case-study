import debug_toolbar
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # administrative
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('__debug__/', include(debug_toolbar.urls)),

    # api
    path('api/v1/', include('policies.urls'))
]
