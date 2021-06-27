from django.shortcuts import render
from rest_framework import mixins, generics
from django.contrib.auth import get_user_model
from users.serializers import UserSerializer, UserGetSerializer


# Create your views here.
class UserList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):

    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        serializer_class = UserGetSerializer
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
