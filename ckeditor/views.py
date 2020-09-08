import datetime
import logging
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.core.files.images import ImageFile
from django.core.files.storage import default_storage
from django.conf import settings

logger = logging.getLogger(__name__)

@require_POST
def upload_view(request):
    f = request.FILES.get('upload', None)
    if not f:
        return JsonResponse({'detail':'no upload file'}, status_code=400)
    img = ImageFile(f)
    now = datetime.datetime.now()
    path = default_storage.save('ckeditor/{:%Y%m}/{}'.format(now, img.name), img)
    return JsonResponse({'url':settings.MEDIA_URL + path})
