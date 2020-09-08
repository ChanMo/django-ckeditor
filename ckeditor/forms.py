from django.forms.fields import CharField
from .widgets import *

class CkeditorField(CharField):
    def __init__(self, **kwargs):
        kwargs.update({'widget': CkeditorWidget()})
        return super().__init__(**kwargs)
