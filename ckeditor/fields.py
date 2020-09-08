from django.db import models
from . import forms

class CkeditorField(models.TextField):
    def formfield(self, **kwargs):
        return super().formfield(**{
            'form_class': forms.CkeditorField,
            **kwargs
        })
