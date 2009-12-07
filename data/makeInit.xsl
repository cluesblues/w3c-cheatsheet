<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:foo="urn:foo">
<xsl:output method="text" 
  encoding="utf-8" 
  />
  <xsl:template match="/">
<xsl:text>"use strict";
var sources = {};
// y: type, i: infoset, u: url, t: title, p: properties
var dictionary = {
</xsl:text>
<xsl:for-each select="/xsl:stylesheet/foo:dictionary/foo:term">
  <xsl:text>    "</xsl:text><xsl:value-of select="foo:short"/><xsl:text>": "</xsl:text><xsl:value-of select="foo:full"/><xsl:text>"</xsl:text>
<xsl:if test="position()!=last()">
<xsl:text>,</xsl:text>
</xsl:if>
<xsl:text>&#xA;</xsl:text>
</xsl:for-each>
<xsl:text>};&#xA;</xsl:text>
</xsl:template>
</xsl:stylesheet>