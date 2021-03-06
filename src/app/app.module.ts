import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Http } from '@angular/http';

import { MyApp } from './app.component';
import { SharedModule } from './shared.module';
import { ProvidersModule } from '../providers/providers.module';

// Http error handler
import { HttpErrorHandler } from '../providers/utilities/api/http-error-handler';

export function createHttpErrorHandler(httpErrorHandler: HttpErrorHandler) {
	return () => {};
}

// Translate
import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: Http) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
	handle(params: MissingTranslationHandlerParams): string {
		console.warn('Missing translation', params);
		return '...';
	}
}

@NgModule({
	declarations: [
		MyApp,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp, {
			// backButtonText: ''
		}),
		SharedModule.forRoot(),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [Http]
			},
			missingTranslationHandler: {
				provide: MissingTranslationHandler,
				useClass: MyMissingTranslationHandler
			}
		}),
		ProvidersModule,
	],
	exports: [
		ProvidersModule,
		TranslateModule,
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
	],
	providers: [
		HttpErrorHandler,
		{
			provide: APP_INITIALIZER,
			useFactory: createHttpErrorHandler,
			deps: [HttpErrorHandler],
			multi: true
		},
	]
})
export class AppModule {}
