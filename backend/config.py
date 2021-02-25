import os


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or b'\x12\x02\xbd7\x9f\xfa]\xcd\xbdnj\xb9\xf2\xec\x80B'

    MONGODB_SETTINGS = {'db': 'crudapp'}
