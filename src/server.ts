import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context';

/**
 * Создаём экземпляр AngularAppEngine
 */
const angularAppEngine = new AngularAppEngine();

/**
 * Обработчик запросов для Netlify
 * Получает объект запроса и контекст выполнения
 */
export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext(); // Получаем контекст выполнения Netlify
  const result = await angularAppEngine.handle(request, context); // Обрабатываем запрос через Angular
  return result || new Response('Not found', { status: 404 }); // Если ответ пуст, возвращаем 404
}

/**
 * Экспортируем обработчик запросов для использования в Netlify
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);