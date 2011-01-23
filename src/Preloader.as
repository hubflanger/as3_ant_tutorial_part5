package 
{
	import flash.display.*;
	import flash.events.*;
	import flash.text.*;
	
	public class Preloader extends Sprite 
	{	
		private var _asset:PreloaderAsset;
		
		public function Preloader() 
		{
			//trace("Preloader constructor");
			_asset = new PreloaderAsset();
			addChild( _asset );
		}
		public function updateProgress( bytesLoaded:uint, bytesTotal:uint ):void 
		{
			var ratio:Number = bytesLoaded / bytesTotal;
			//trace("Preloader:updateProgress: " + ratio);
			_asset.bar.scaleX = ratio;
			_asset.progessTxt.text = bytesLoaded + " kb / " + bytesTotal + " kb";
		}		
	}
}