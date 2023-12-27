// Load and export all of the stimulus controllers
import { application } from "./controllers/application"

// Import all controller files
import AccordionController from './controllers/accordion_controller'
import AlertDialogController from './controllers/alert_dialog_controller'
import CalendarController from './controllers/calendar_controller'
import ChartController from './controllers/chart_controller'
import ClipboardController from './controllers/clipboard_controller'
import CollapsibleController from './controllers/collapsible_controller'
import CommandController from './controllers/command_controller'
import DialogController from './controllers/dialog_controller'
import DismissableController from './controllers/dismissable_controller'
import InputController from './controllers/input_controller'
import PopoverController from './controllers/popover_controller'
import SelectController from './controllers/select_controller'
import TabsController from './controllers/tabs_controller'
import TextController from './controllers/text_controller'
import ToggleThemeController from './controllers/toggle_theme_controller'
import SheetController from './controllers/sheet_controller'

// Register all controllers
application.register('accordion', AccordionController)
application.register('alert-dialog', AlertDialogController)
application.register('calendar', CalendarController)
application.register('chart', ChartController)
application.register('clipboard', ClipboardController)
application.register('collapsible', CollapsibleController)
application.register('command', CommandController)
application.register('dialog', DialogController)
application.register('dismissable', DismissableController)
application.register('input', InputController)
application.register('popover', PopoverController)
application.register('select', SelectController)
application.register('tabs', TabsController)
application.register('text', TextController)
application.register('toggle-theme', ToggleThemeController)
application.register('sheet', SheetController)

// Export all controllers so user of npm package can lazy load controllers
export { default as AccordionController } from './controllers/accordion_controller'
export { default as AlertDialogController } from './controllers/alert_dialog_controller'
export { default as CalendarController } from './controllers/calendar_controller'
export { default as ChartController } from './controllers/chart_controller'
export { default as ClipboardController } from './controllers/clipboard_controller'
export { default as CollapsibleController } from './controllers/collapsible_controller'
export { default as CommandController } from './controllers/command_controller'
export { default as DialogController } from './controllers/dialog_controller'
export { default as DismissableController } from './controllers/dismissable_controller'
export { default as InputController } from './controllers/input_controller'
export { default as PopoverController } from './controllers/popover_controller'
export { default as SelectController } from './controllers/select_controller'
export { default as TabsController } from './controllers/tabs_controller'
export { default as TextController } from './controllers/text_controller'
export { default as ToggleThemeController } from './controllers/toggle_theme_controller'
export { default as SheetController } from './controllers/sheet_controller'

// Export application
export { application }