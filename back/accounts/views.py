from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_201_CREATED
)

from .serializers import (
    UserSerializer
)

@api_view(['POST'])
def signup(request):
    # 1. 비밀번호 준비
    password = request.data.get('password')
    password_confirmation = request.data.get('passwordConfirmation')

    # 2. 비밀번호 일치 확인
    if password != password_confirmation:
        return Response({ 'error': '비밀번호가 일치하지 않습니다.' }, HTTP_400_BAD_REQUEST)
    
    # 3. 인스턴스 준비
    serializer = UserSerializer(data=request.data)

    # 4. 유효성 검사
    if serializer.is_valid(raise_exception=True):
        user = serializer.save()
        # 5. 비밀번호 해싱
        user.set_password(request.data.get('password'))
        user.save()
        return Response(serializer.data, HTTP_201_CREATED)
