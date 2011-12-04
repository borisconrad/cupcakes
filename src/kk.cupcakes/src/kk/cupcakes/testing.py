from plone.app.testing import PLONE_FIXTURE
from plone.app.testing import PloneSandboxLayer
from plone.app.testing import IntegrationTesting
from plone.app.testing import FunctionalTesting
from plone.app.testing import applyProfile

from zope.configuration import xmlconfig

class KkCupcakes(PloneSandboxLayer):

    defaultBases = (PLONE_FIXTURE, )

    def setUpZope(self, app, configurationContext):
        # Load ZCML for this package
        import kk.cupcakes
        xmlconfig.file('configure.zcml',
                       kk.cupcakes,
                       context=configurationContext)


    def setUpPloneSite(self, portal):
        pass

KK_CUPCAKES_FIXTURE = KkCupcakes()
KK_CUPCAKES_INTEGRATION_TESTING = \
    IntegrationTesting(bases=(KK_CUPCAKES_FIXTURE, ),
                       name="KkCupcakes:Integration")