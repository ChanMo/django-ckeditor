# Django Ckeditor5


## Quick Start

Add Ckeditor to settings

Edit `settings.py`
```
INSTALLED_APPS = [
    ...
    'ckeditor',
]
```

Edit `urls.py`
```
    path('ckeditor/', include('ckeditor.urls')),
```



Install npm packages

```
$ yarn add @ckeditor/ckeditor5-classic
```

Add to field of models

```
from ckeditor.fields import CkeditorField

class Demo(models.Model):
    content = CkeditorField(blank=True, null=True)
```

## Watch And Build Js

```
$ webpack --mode development --watch
$ webpack --mode product
```
