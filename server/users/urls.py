from django.urls import include, path
from users import views

urlpatterns = [
    path(
        '',
        views.UserList.as_view(),
        name="user-list"),
]
