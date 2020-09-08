from django.forms.widgets import Textarea

class CkeditorWidget(Textarea):
    template_name = 'ckeditor/widgets/ckeditor.html'
    def __init__(self, *args, **kwargs):
        super(CkeditorWidget, self).__init__(*args, **kwargs)
        self.attrs['id'] = 'editor'

    # class Media:
    #     js = ('ckeditor/ckeditor.bundle.js',)
