// Load and export all of the stimulus controllers
import { application } from "./controllers/application"

// Import all controller files
import AccordionController from './controllers/accordion_controller'
import AlertDialogController from './controllers/alert_dialog_controller'
import ClipboardController from './controllers/clipboard_controller'
import CollapsibleController from './controllers/collapsible_controller'
import DialogController from './controllers/dialog_controller'
import DismissableController from './controllers/dismissable_controller'
import InputController from './controllers/input_controller'
import PopoverController from './controllers/popover_controller'
import TabsController from './controllers/tabs_controller'
import ToggleThemeController from './controllers/toggle_theme_controller'

// Register all controllers
application.register('accordion', AccordionController)
application.register('alert-dialog', AlertDialogController)
application.register('clipboard', ClipboardController)
application.register('collapsible', CollapsibleController)
application.register('dialog', DialogController)
application.register('dismissable', DismissableController)
application.register('input', InputController)
application.register('popover', PopoverController)
application.register('tabs', TabsController)
application.register('toggle-theme', ToggleThemeController)

// Export all controllers so user of npm package can lazy load controllers
export { default as AccordionController } from './controllers/accordion_controller'
export { default as AlertDialogController } from './controllers/alert_dialog_controller'
export { default as ClipboardController } from './controllers/clipboard_controller'
export { default as CollapsibleController } from './controllers/collapsible_controller'
export { default as DialogController } from './controllers/dialog_controller'
export { default as DismissableController } from './controllers/dismissable_controller'
export { default as InputController } from './controllers/input_controller'
export { default as PopoverController } from './controllers/popover_controller'
export { default as TabsController } from './controllers/tabs_controller'
export { default as ToggleThemeController } from './controllers/toggle_theme_controller'

// Export application
export { application }