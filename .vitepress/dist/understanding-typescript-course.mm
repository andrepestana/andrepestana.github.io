<map version="freeplane 1.8.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="Understanding Typescript Course" FOLDED="false" ID="ID_83436458" CREATED="1666999699446" MODIFIED="1666999748991" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" fit_to_viewport="false"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24.0 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ICON_SIZE="12.0 pt" COLOR="#000000" STYLE="fork">
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10.0 pt" SHAPE_VERTICAL_MARGIN="10.0 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="18" RULE="ON_BRANCH_CREATION"/>
<node TEXT="Basic &amp; Basic Types" POSITION="right" ID="ID_1975374480" CREATED="1666999798334" MODIFIED="1667001691615">
<edge COLOR="#00ff00"/>
<node TEXT="number" ID="ID_555882393" CREATED="1666999816280" MODIFIED="1666999933927">
<node TEXT="All number (integers, float)" ID="ID_1033871323" CREATED="1666999998167" MODIFIED="1667000028333">
<node TEXT="1" OBJECT="java.lang.Long|1" ID="ID_1859531747" CREATED="1667000122168" MODIFIED="1667000127039"/>
<node TEXT="5.3" OBJECT="java.lang.Double|5.3" ID="ID_1783319077" CREATED="1667000127549" MODIFIED="1667000131303"/>
<node TEXT="-10" OBJECT="java.lang.Long|-10" ID="ID_577469403" CREATED="1667000131996" MODIFIED="1667000136155"/>
</node>
</node>
<node TEXT="string" ID="ID_1127785277" CREATED="1666999934437" MODIFIED="1666999939314">
<node TEXT="All text values" ID="ID_445050455" CREATED="1667000034042" MODIFIED="1667000038152">
<node TEXT=" &apos;Hi&apos;" ID="ID_1814688823" CREATED="1667000137114" MODIFIED="1667000163052"/>
<node TEXT="&quot;Hi&quot;" ID="ID_720241757" CREATED="1667000146010" MODIFIED="1667000170293"/>
<node TEXT="`Hi`" ID="ID_106099129" CREATED="1667000172845" MODIFIED="1667000181944"/>
</node>
</node>
<node TEXT="boolean" ID="ID_40158547" CREATED="1666999941565" MODIFIED="1666999944435">
<node TEXT="true or false only" ID="ID_44889417" CREATED="1667000047499" MODIFIED="1667000053167">
<node TEXT="true" ID="ID_860886089" CREATED="1667000203414" MODIFIED="1667000205545"/>
<node TEXT="false" ID="ID_840429641" CREATED="1667000206175" MODIFIED="1667000207337"/>
</node>
</node>
<node TEXT="object" ID="ID_478624010" CREATED="1666999954371" MODIFIED="1667001699941">
<node TEXT="Any JS object" ID="ID_704001914" CREATED="1667000091815" MODIFIED="1667000112241">
<node TEXT="{ age: 30 }" ID="ID_17051725" CREATED="1667000211515" MODIFIED="1667000221988"/>
</node>
<node TEXT="Can be nested" ID="ID_1040555336" CREATED="1667000249841" MODIFIED="1667001699941" HGAP_QUANTITY="18.499999865889553 pt" VSHIFT_QUANTITY="27.749999172985582 pt">
<node TEXT="{&#xa;  age: number;&#xa;  name: {&#xa;    firstName: string;&#xa;    lastName: string;&#xa;}" ID="ID_1791386619" CREATED="1667000261724" MODIFIED="1667000418454" HGAP_QUANTITY="43.99999910593035 pt" VSHIFT_QUANTITY="-27.749999172985582 pt"/>
</node>
</node>
<node TEXT="Array" ID="ID_1973901540" CREATED="1667000450502" MODIFIED="1667000457238">
<node TEXT="can flexible" ID="ID_19857429" CREATED="1667000458320" MODIFIED="1667000537517">
<node TEXT="any[]" ID="ID_1586357820" CREATED="1667000538820" MODIFIED="1667000850240"/>
</node>
<node TEXT="or strict" ID="ID_677259718" CREATED="1667000527717" MODIFIED="1667000555173">
<node TEXT="string[]" ID="ID_1382742588" CREATED="1667000555716" MODIFIED="1667000884362"/>
</node>
</node>
<node TEXT="Tuple" ID="ID_177745163" CREATED="1667000640048" MODIFIED="1667000652582">
<node TEXT="An array with fixed types and length to have" ID="ID_924994896" CREATED="1667000885056" MODIFIED="1667000918436"/>
</node>
<node TEXT="Enum" ID="ID_1074379356" CREATED="1667000652919" MODIFIED="1667000942516">
<node TEXT="Enumerated specific identifiers" ID="ID_1301149581" CREATED="1667000931862" MODIFIED="1667001001906">
<node TEXT="can have number or string as values" ID="ID_1803452644" CREATED="1667000959045" MODIFIED="1667001033473"/>
<node TEXT="enum Role { ADMIN, MANAGER }" ID="ID_1716717280" CREATED="1667001042976" MODIFIED="1667001108912"/>
</node>
</node>
<node TEXT="any" ID="ID_1766200718" CREATED="1667000659387" MODIFIED="1667000661085">
<node TEXT="Most flexible type" ID="ID_1575132273" CREATED="1667001127063" MODIFIED="1667001142984"/>
</node>
<node TEXT="Union" ID="ID_569478139" CREATED="1667000664827" MODIFIED="1667000834071">
<node TEXT="const id: string | number;" ID="ID_862863428" CREATED="1667001201582" MODIFIED="1667001344234"/>
</node>
<node TEXT="Literal Types" ID="ID_1698030114" CREATED="1667001344914" MODIFIED="1667001352394">
<node TEXT="const result: &apos;ok&apos; | &apos;fail&apos;;" ID="ID_639973552" CREATED="1667001376456" MODIFIED="1667001454314"/>
</node>
<node TEXT="Type Aliases / Custom Types" ID="ID_203248686" CREATED="1667001353230" MODIFIED="1667001373695">
<node TEXT="type Combinable = string | number;" ID="ID_767917671" CREATED="1667001455312" MODIFIED="1667001498937"/>
</node>
<node TEXT="Function Return Types &amp; &quot;void&quot;" ID="ID_655839790" CREATED="1667001524268" MODIFIED="1667001691615" HGAP_QUANTITY="14.749999977648258 pt" VSHIFT_QUANTITY="16.499999508261695 pt">
<node TEXT="function printResult(num: number): void {&#xa;  console.log(&apos;Result is: &apos; + num);&#xa;}" ID="ID_1855787719" CREATED="1667001581694" MODIFIED="1667001685761"/>
</node>
<node TEXT="Functions as Types" ID="ID_652080832" CREATED="1667001724515" MODIFIED="1667001737064">
<node TEXT="let combineValues: () =&gt; number;" ID="ID_1726310130" CREATED="1667001763202" MODIFIED="1667001790071"/>
</node>
<node TEXT="Function Types &amp; Callbacks" ID="ID_1743804898" CREATED="1667001828204" MODIFIED="1667001849996">
<node TEXT="function addHandler(n1: number, n2: number), cb: (num: number) =&gt; void) {&#xa;  const result = n1 + n2;&#xa;  cb(result);&#xa;}" ID="ID_1442014929" CREATED="1667001852893" MODIFIED="1667001982151"/>
</node>
<node TEXT="unknown" ID="ID_1272636154" CREATED="1667002017048" MODIFIED="1667002024158">
<node TEXT="    more restrictive than &quot;any&quot;" ID="ID_1427569556" CREATED="1667002026700" MODIFIED="1667002056357"/>
<node TEXT="a &quot;string&quot; variable accepts receiving a &quot;any&quot; variable value but not an &quot;unknown&quot; variable value" ID="ID_1909210450" CREATED="1667002252868" MODIFIED="1667002360119"/>
</node>
<node TEXT="never" ID="ID_672172497" CREATED="1667002363972" MODIFIED="1667002387123">
<node TEXT="return type to indicate it never returns a value" ID="ID_1595831194" CREATED="1667002387679" MODIFIED="1667002410562"/>
</node>
</node>
<node TEXT="Typescript Compiler and Configuration" POSITION="left" ID="ID_874825947" CREATED="1667002464926" MODIFIED="1667002476567">
<edge COLOR="#00ffff"/>
<node TEXT="watch mode" FOLDED="true" ID="ID_1516542051" CREATED="1667177598604" MODIFIED="1667177602810">
<node TEXT="tsc -w" ID="ID_361724951" CREATED="1667177683586" MODIFIED="1667177694076"/>
<node TEXT="tsc --watch" ID="ID_270847667" CREATED="1667177694673" MODIFIED="1667177699444"/>
</node>
<node TEXT="compiling the whole project" ID="ID_510588605" CREATED="1667177705425" MODIFIED="1667177716507">
<node TEXT="tsc --init" ID="ID_1599808198" CREATED="1667177718847" MODIFIED="1667177726116">
<node TEXT="creates tsconfig.json" ID="ID_354301563" CREATED="1667177760284" MODIFIED="1667177772865"/>
<node TEXT="" ID="ID_1488894176" CREATED="1667177772958" MODIFIED="1667177772958"/>
</node>
</node>
<node TEXT="include / exclude" ID="ID_209910916" CREATED="1667177789804" MODIFIED="1667177836918">
<node TEXT="accepts wildcards" ID="ID_1017051214" CREATED="1667177845495" MODIFIED="1667177856188">
<node TEXT="*" ID="ID_1766323370" CREATED="1667177858360" MODIFIED="1667177861200">
<node TEXT="any file" ID="ID_1753414344" CREATED="1667177885849" MODIFIED="1667177889972"/>
</node>
<node TEXT="**" ID="ID_135347430" CREATED="1667177862418" MODIFIED="1667177865456">
<node TEXT="any folder" ID="ID_1144618650" CREATED="1667177879165" MODIFIED="1667177883839"/>
</node>
</node>
<node TEXT="node_modules is automatically excluded by default" ID="ID_492896329" CREATED="1667177905145" MODIFIED="1667177931973"/>
<node TEXT="resulting is &quot;include&quot; - &quot;exclude&quot;" ID="ID_966394617" CREATED="1667178015982" MODIFIED="1667178063166"/>
</node>
<node TEXT="target" ID="ID_561065434" CREATED="1667178120443" MODIFIED="1667178123291">
<node TEXT="js target version for the code tobe compiled" ID="ID_90244286" CREATED="1667178169906" MODIFIED="1667178185113"/>
</node>
<node TEXT="module" ID="ID_76072085" CREATED="1667178125957" MODIFIED="1667178128022"/>
<node TEXT="lib" FOLDED="true" ID="ID_981519169" CREATED="1667178217573" MODIFIED="1667178219238">
<node TEXT="libs that we are working with to be included like" ID="ID_1637296882" CREATED="1667178232436" MODIFIED="1667178360377">
<node TEXT="dom" ID="ID_1925568199" CREATED="1667178250293" MODIFIED="1667178251892"/>
<node TEXT="es6" ID="ID_961774297" CREATED="1667178307801" MODIFIED="1667178310325"/>
<node TEXT="dom.iterable" ID="ID_67141655" CREATED="1667178319045" MODIFIED="1667178323173"/>
<node TEXT="scriphost" ID="ID_1991986005" CREATED="1667178325205" MODIFIED="1667178328895"/>
<node TEXT="etc" ID="ID_382111453" CREATED="1667178331183" MODIFIED="1667178343744"/>
</node>
</node>
<node TEXT="allowjs" ID="ID_670663464" CREATED="1667178383897" MODIFIED="1667178387167">
<node TEXT="compiles js files even if it doesn&apos;t finish in .ts" ID="ID_1639928307" CREATED="1667178444354" MODIFIED="1667178471642"/>
</node>
<node TEXT="checkjs" FOLDED="true" ID="ID_1389107128" CREATED="1667178394005" MODIFIED="1667178398651">
<node TEXT="doesn&apos;t compile js files without .ts file extension but check syntax" ID="ID_1473576866" CREATED="1667178482942" MODIFIED="1667178523780"/>
</node>
<node TEXT="jsx" ID="ID_357505500" CREATED="1667178556057" MODIFIED="1667178557893"/>
<node TEXT="declarationMap" ID="ID_1488184632" CREATED="1667178570510" MODIFIED="1667178578545"/>
<node TEXT="sourceMap" ID="ID_91043457" CREATED="1667178579512" MODIFIED="1667178583561">
<node TEXT="allows debugging ts files instead of resulting js" ID="ID_326287810" CREATED="1667178627813" MODIFIED="1667178658059"/>
</node>
<node TEXT="outFile" ID="ID_1073027555" CREATED="1667178701769" MODIFIED="1667178703926"/>
<node TEXT="rootDir" ID="ID_1072121909" CREATED="1667178704544" MODIFIED="1667178710142">
<node TEXT="the dir in the project to be compiled and have the dir structure copied." ID="ID_1990307853" CREATED="1667178722617" MODIFIED="1667178778082">
<node TEXT="e.g. ./src" ID="ID_794606276" CREATED="1667178790289" MODIFIED="1667178840659"/>
</node>
</node>
<node TEXT="outDir" FOLDED="true" ID="ID_12769541" CREATED="1667178710687" MODIFIED="1667178713115">
<node TEXT="the dir to contain the resulting structure and compiled files" ID="ID_959937177" CREATED="1667178848522" MODIFIED="1667178877810">
<node TEXT="e.g. ./dist" ID="ID_1798655550" CREATED="1667178878641" MODIFIED="1667178886111"/>
</node>
</node>
<node TEXT="composite" ID="ID_705506371" CREATED="1667178938149" MODIFIED="1667178941502"/>
<node TEXT="removeComments" ID="ID_626040496" CREATED="1667178942781" MODIFIED="1667178946807"/>
<node TEXT="noEmit" ID="ID_138778089" CREATED="1667178952989" MODIFIED="1667178955397">
<node TEXT="only checks and don&apos;t create resulting files" ID="ID_1947237251" CREATED="1667178964108" MODIFIED="1667178984291"/>
</node>
<node TEXT="importHelpers" ID="ID_1450550856" CREATED="1667178998444" MODIFIED="1667179003112"/>
<node TEXT="downlevelIterations" ID="ID_938179394" CREATED="1667179004249" MODIFIED="1667179047725"/>
<node TEXT="noEmitOnError" ID="ID_1308393536" CREATED="1667179059672" MODIFIED="1667179136232">
<node TEXT="don&apos;t create files if there&apos;s any error" ID="ID_1215472241" CREATED="1667179163307" MODIFIED="1667179176387"/>
</node>
<node TEXT="strict compilation" ID="ID_1621112020" CREATED="1667179278282" MODIFIED="1667179284186">
<node TEXT="either &quot;strict&quot;: true" ID="ID_444055215" CREATED="1667179288514" MODIFIED="1667179301443"/>
<node TEXT="or one strict options" ID="ID_1954371680" CREATED="1667179301837" MODIFIED="1667179369287">
<node TEXT="noImplicitAny" FOLDED="true" ID="ID_1908337873" CREATED="1667179390482" MODIFIED="1667179405037">
<node TEXT="no implicit any for function parameters" ID="ID_1120494075" CREATED="1667179468108" MODIFIED="1667179485962"/>
</node>
<node TEXT="strictNullChecks" ID="ID_1573709458" CREATED="1667179596778" MODIFIED="1667179603185">
<node TEXT="strict to values that can be null at any time" ID="ID_579927802" CREATED="1667179636835" MODIFIED="1667179662536"/>
<node TEXT="document.querySelector(&apos;button&apos;)! avoids null" ID="ID_1352405395" CREATED="1667179739648" MODIFIED="1667179782015"/>
<node TEXT="" ID="ID_130242183" CREATED="1667180078614" MODIFIED="1667180078614"/>
</node>
<node TEXT="strictFunctionTypes" ID="ID_1752015142" CREATED="1667180065359" MODIFIED="1667180071573"/>
<node TEXT="strictBindCallApply" ID="ID_393970066" CREATED="1667180080726" MODIFIED="1667180097631"/>
<node TEXT="strictPropertyInitialization" ID="ID_1885026609" CREATED="1667180121799" MODIFIED="1667180180453"/>
<node TEXT="noImplicityThis" ID="ID_1854310993" CREATED="1667180188559" MODIFIED="1667180195678"/>
<node TEXT="alwaysStrict" ID="ID_965047609" CREATED="1667180199886" MODIFIED="1667180208280"/>
</node>
</node>
</node>
<node TEXT="Next Generation JavaScript &amp; TypeScript" POSITION="right" ID="ID_406624533" CREATED="1667180213742" MODIFIED="1667180247439">
<edge COLOR="#7c0000"/>
</node>
<node TEXT="Classes &amp; Interfaces" POSITION="left" ID="ID_1162894966" CREATED="1667180255938" MODIFIED="1667180267298">
<edge COLOR="#007c00"/>
</node>
<node TEXT="Advanced Types" POSITION="right" ID="ID_564240131" CREATED="1667180273373" MODIFIED="1667180278550">
<edge COLOR="#7c007c"/>
</node>
<node TEXT="Generics" POSITION="left" ID="ID_1339728510" CREATED="1667180281858" MODIFIED="1667180286921">
<edge COLOR="#007c7c"/>
</node>
<node TEXT="Decorators" POSITION="right" ID="ID_1096286611" CREATED="1667180291084" MODIFIED="1667180298272">
<edge COLOR="#7c7c00"/>
</node>
<node TEXT="Modules &amp; Namespaces" POSITION="left" ID="ID_596676076" CREATED="1667180310292" MODIFIED="1667180324315">
<edge COLOR="#0000ff"/>
</node>
<node TEXT="Using Webpack with TypeScript" POSITION="right" ID="ID_108762677" CREATED="1667180334004" MODIFIED="1667180345909">
<edge COLOR="#00ff00"/>
</node>
<node TEXT="Third Part Libraries &amp; Typescript" POSITION="left" ID="ID_164603706" CREATED="1667180353262" MODIFIED="1667180370313">
<edge COLOR="#ff00ff"/>
</node>
<node TEXT="React.js &amp; TypeScript" POSITION="right" ID="ID_1777650301" CREATED="1667180380306" MODIFIED="1667180440529">
<edge COLOR="#00ffff"/>
</node>
<node TEXT="Node.js + Express &amp; Typescript" POSITION="left" ID="ID_1498481184" CREATED="1667180391789" MODIFIED="1667180428288">
<edge COLOR="#7c0000"/>
</node>
</node>
</map>
