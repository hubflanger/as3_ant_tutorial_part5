/**
 * compileSWF.jsfl - JSFL Compiler - saves the currently open/selected FLA in the Flash IDE, 
 * clears the ASO cache (to prevent class caching issues) and executes a "Test Movie" preview.
 * 
 * The command may be combined with Ant to automate FLA compilation when using Eclipse for Actionscript
 * development or as a standalone solution. To implement in Ant simply add a task to your build.xml:
 * 
 * 	<target name="compile-fla" description="compile current opened fla in src dir with Flash IDE (clear's ASO cache and saves FLA)">
 * 		<echo message="|*|*|*| aso class cache clear | source save | compilation begins |*|*|*|"/>
 * 		<exec executable="open"><arg line="path/to/compile.jsfl"/></exec>
 * 	</target>	
 * 
 * You may add the tradition flash "Test Movie" key-binding by making it your default task:
 * <project name="Your Project" basedir="." default="compile-fla">
 * 
 * Then map your key (Control+Enter) in Eclipse -> Preferences -> General -> Keys ->"Run Ant Build"
 * To allow Flash compilation directly from Eclipse.
 * 
 * @version 1.1.0
 * @author jason m horwitz | Sekati LLC | sekati.com
 * @see http://fdtkit.googlecode.com/
 * @license http://www.opensource.org/licenses/mit-license.php
 */

function clearASOCache( path ) {
	if (!FLfile.exists( path )) {
		fl.trace( path + "does not exist" );
		return;
	}
	FLfile.remove( path );
}

clearASOCache ( fl.configURI + "Classes/aso" );
fl.outputPanel.clear();
fl.getDocumentDOM().save();
fl.getDocumentDOM().publish(); 

